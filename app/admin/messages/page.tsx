import { db } from "@/lib/db";
import { messages } from "@/lib/schema";
import { desc } from "drizzle-orm";
import { Mail, MailOpen } from "lucide-react";
import { MessageActions } from "@/components/admin/MessageActions";

export default async function MessagesPage() {
  const allMessages = await db.select().from(messages).orderBy(desc(messages.createdAt));

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-8 flex items-center gap-3">
        <h1 className="text-2xl font-bold">Inbox Messages</h1>
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
          {allMessages.length} Total
        </span>
      </div>

      <div className="space-y-4">
        {allMessages.map((msg) => (
          <div 
            key={msg.id} 
            className={`p-6 rounded-xl border transition-all ${
              msg.isRead 
                ? "bg-gray-50 border-gray-100 opacity-75" 
                : "bg-white border-blue-100 shadow-sm ring-1 ring-blue-50"
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                {msg.isRead ? (
                  <div className="p-2 bg-gray-200 rounded-full text-gray-500"><MailOpen size={18} /></div>
                ) : (
                  <div className="p-2 bg-blue-100 rounded-full text-blue-600"><Mail size={18} /></div>
                )}
                
                <div>
                  <h3 className={`text-sm font-bold ${msg.isRead ? "text-gray-600" : "text-black"}`}>
                    {msg.senderEmail}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {msg.createdAt ? new Date(msg.createdAt).toLocaleString() : "Unknown Date"}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <MessageActions id={msg.id} isRead={msg.isRead} />
            </div>

            <div className="pl-0 md:pl-12">
              <p className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                {msg.messageBody}
              </p>
            </div>
          </div>
        ))}

        {allMessages.length === 0 && (
          <div className="text-center py-20 bg-white border border-gray-200 border-dashed rounded-xl">
            <Mail className="mx-auto h-10 w-10 text-gray-300 mb-3" />
            <p className="text-gray-500">No messages in inbox.</p>
          </div>
        )}
      </div>
    </div>
  );
}