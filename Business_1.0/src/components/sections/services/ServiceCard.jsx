import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageSquare, Calendar, Mail, Database, Send } from 'lucide-react';

function ServiceCard({ id, title, description, features, icon, reversed, webhookUrl }) {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="h-8 w-8 text-purple-400" />;
      case 'Calendar': return <Calendar className="h-8 w-8 text-purple-400" />;
      case 'Mail': return <Mail className="h-8 w-8 text-purple-400" />;
      case 'Database': return <Database className="h-8 w-8 text-purple-400" />;
      default: return <MessageSquare className="h-8 w-8 text-purple-400" />;
    }
  };

  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendRequest = async () => {
    const value = inputText.trim();
    if (value.length === 0) return;

    setLoading(true);
    setResponse('');

    const payload = {
      nombre: 'Pablo',
      content: value,
    };

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setResponse('Error en la petición al servidor');
        setLoading(false);
        return;
      }

      const data = await res.text();
      setResponse(data);
    } catch (error) {
      setResponse('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendRequest();
    }
  };

  const LoadingSpinner = () => (
    <svg
      className="animate-spin h-10 w-10 text-purple-400 mx-auto my-16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  );

  return (
    <div
      id={id}
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
    >
      <motion.div
        className={`md:w-1/2 mb-8 md:mb-0 ${reversed ? 'md:pl-12' : 'md:pr-12'}`}
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="bg-purple-900 bg-opacity-20 p-2 rounded-lg inline-block mb-4">
          {renderIcon(icon)}
        </div>
        <h2 className="text-3xl font-bold text-purple-400 mb-4">{title}</h2>
        <p className="text-gray-300 mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-purple-400 mr-2" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="md:w-1/2 bg-gray-800 rounded-xl overflow-hidden shadow-xl p-4 flex flex-col gap-4"
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div
          className="w-full p-4 border border-gray-600 rounded resize-none bg-gray-900 text-gray-200 min-h-[180px] flex items-center justify-center text-center"
          style={{ whiteSpace: 'pre-wrap', minHeight: '180px' }}
        >
          {loading ? <LoadingSpinner /> : (response )}
        </div>

        <div className="flex items-center">
          <textarea
            className="flex-grow p-2 border border-gray-600 rounded-l resize-none bg-gray-700 text-white"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe aquí..."
            style={{ height: '42px' }}
          />
          <button
            onClick={sendRequest}
            className="bg-purple-600 hover:bg-purple-700 p-3 rounded-r-full ml-2 flex items-center justify-center"
            aria-label="Enviar"
            disabled={loading}
            style={{ width: '48px', height: '48px' }}
          >
            <Send className="w-6 h-6 text-white" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ServiceCard;
