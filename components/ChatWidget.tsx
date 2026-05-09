'use client';

import { useEffect } from "react";
import '@n8n/chat/style.css'

export default function ChatWidget() {

    useEffect(() => {
        import('@n8n/chat').then(({createChat}) => {
            createChat({
                webhookUrl: 'https://n8n-sampleblue.onrender.com/webhook/f2adf173-8b8f-4fa3-a99e-99f32df2ce40/chat',
                mode: 'window',
                // disableSessionPersistence: true,
                chatInputKey: 'chatInput',
                metadata: {},
                showWelcomeScreen: true,
                initialMessages: [
                    'Hi! I am Blu!',
                    'Ask me anything to know about Jella!'
                ],
                i18n: {
                    en: {
                        title: 'Jella\'s Blu',
                        subtitle: 'Ask me anything about Jella!',
                        inputPlaceholder: 'Type your question',
                        footer: "",
                        getStarted: "Start Chat",
                        closeButtonTooltip: 'Close Chat',
                    }
                }
            })
        })
    }, [])
    return null
}