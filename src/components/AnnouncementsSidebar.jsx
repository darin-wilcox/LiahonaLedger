import Button from './Button.jsx';
import LoginButton from './LoginButton.jsx';

export default function AnnouncementsSidebar({
  onStartAddAnnouncement,
  announcements,
  onSelectAnnouncement,
  selectedAnnouncementId,
}) {
  const authenticateWithClickUp = () => {
    // const clientId = process.env.REACT_APP_CLICKUP_CLIENT_ID;
    const redirectUri = encodeURIComponent("http://localhost:5173");
    const clickUpUrl = `https://app.clickup.com/api?client_id=K0MZGNS2IFMOIOEG96LKWEADINL523Y7&redirect_uri=${redirectUri}`;
  
    window.location.href = clickUpUrl;
  };
  
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Announcements
      </h2>
      <div>
        <LoginButton />
        <Button onClick={onStartAddAnnouncement}>+ Add Announcement</Button>
        <Button onClick={authenticateWithClickUp}>Test Clickup</Button>
      </div>
      <ul className="mt-8">
        {announcements.map((announcement) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (announcement.id === selectedAnnouncementId) {
            cssClasses += ' bg-stone-800 text-stone-200'
          } else {
            cssClasses += ' text-stone-400'
          }

          return (
            <li key={announcement.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectAnnouncement(announcement.id)}
              >
                {announcement.announceTitle}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
