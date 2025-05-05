import { useState } from 'react';
import { Mail } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import toast, { Toaster } from 'react-hot-toast';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const copyEmail = () => {
    navigator.clipboard.writeText('kai.etori1005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      toast.success('メッセージを送信しました！');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-center">
          お問い合わせ
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Email Contact Info */}
          <div className="bg-blue-800/50 rounded-lg p-8 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-700/50">
            <Mail size={48} className="mx-auto mb-6 text-blue-300" />
            
            <h3 className="text-2xl font-semibold mb-6 text-center">メールでのお問い合わせ</h3>
            
            <p className="text-blue-100 mb-8 text-center">
              お気軽にメールでご連絡ください。
            </p>
            
            <div 
              className="flex items-center justify-center space-x-2 p-4 bg-blue-950/50 rounded-lg cursor-pointer hover:bg-blue-800/50 transition-colors"
              onClick={copyEmail}
            >
              <span className="text-blue-200 font-mono">kai.etori1005@gmail.com</span>
              <button 
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="メールアドレスをコピー"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
            
            {copied && (
              <p className="text-green-400 mt-2 text-sm text-center">
                メールアドレスをコピーしました！
              </p>
            )}
          </div>

          {/* Contact Form */}
          <div className="bg-blue-800/50 rounded-lg p-8 backdrop-blur-sm shadow-lg border border-blue-700/50">
            <h3 className="text-2xl font-semibold mb-6">お問い合わせフォーム</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-blue-950/50 border border-blue-700/50 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-blue-950/50 border border-blue-700/50 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-blue-950/50 border border-blue-700/50 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
};

export default Contact;