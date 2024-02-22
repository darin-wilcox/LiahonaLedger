import noAnnouncementImage from '../assets/no-announcements.png';
import Button from './Button.jsx';

export default function NoAnnouncementSelected({ onStartAddAnnouncement }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noAnnouncementImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Announcement Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select an Announcement or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddAnnouncement}>Create new Announcement</Button>
      </p>
    </div>
  );
}
