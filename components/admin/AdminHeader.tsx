export default function AdminHeader({
  items,
  handleCreateNewPost,
}: HeaderItem) {
  return (
    <header className="flex fixed top-0 right-0 left-16 bg-slate-50 dark:bg-gray-900 p-5 justify-end gap-3">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={item.class}
          onClick={() => handleCreateNewPost(item.id)}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </header>
  );
}

export interface HeaderItem {
  items: {
    id: string;
    label: string;
    class: string;
    icon: any;
  }[];
  handleCreateNewPost;
}
