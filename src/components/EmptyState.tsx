import { SearchX } from "lucide-react";

export function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="empty-state" role="status">
      <SearchX size={32} strokeWidth={1.5} aria-hidden="true" />
      <h2>暂时没有找到相关服务</h2>
      <p>尝试其他关键词或查看全部服务。</p>
      <button type="button" onClick={onReset}>查看全部服务</button>
    </div>
  );
}
