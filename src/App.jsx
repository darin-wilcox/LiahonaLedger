import { useState } from 'react';

import NewAnnouncement from './components/NewAnnouncement.jsx';
import NoAnnouncementSelected from './components/NoAnnouncementSelected.jsx';
import AnnouncementsSidebar from './components/AnnouncementsSidebar.jsx';
import SelectedAnnouncement from './components/SelectedAnnouncement.jsx';

function App() {
  const [announcementState, setAnnouncementState] = useState({
    selectedAnnouncementId: undefined,
    announcements: [],
  });

  function handleSelectAnnouncement(id) {
    setAnnouncementState((prevState) => {
      return {
        ...prevState,
        selectedAnnouncementId: id,
      };
    });
  }

  function handleStartAddAnnouncement() {
    setAnnouncementState((prevState) => {
      return {
        ...prevState,
        selectedAnnouncementId: null,
      };
    });
  }

  function handleCancelAddAnnouncement() {
    setAnnouncementState((prevState) => {
      return {
        ...prevState,
        selectedAnnouncementId: undefined,
      };
    });
  }

  function handleAddAnnouncement(announcementData) {
    setAnnouncementState((prevState) => {
      const announcementId = Math.random();
      const newAnnouncement = {
        ...announcementData,
        id: announcementId,
      };

      return {
        ...prevState,
        selectedAnnouncementId: undefined,
        announcements: [...prevState.announcements, newAnnouncement],
      };
    });
  }

  function handleDeleteAnnouncement() {
    setAnnouncementState((prevState) => {
      return {
        ...prevState,
        selectedAnnouncementId: undefined,
        announcements: prevState.announcements.filter(
          (announcment) => announcment.id !== prevState.selectedAnnouncementId
        ),
      };
    });
  }

  const selectedAnnouncement = announcementState.announcements.find(
    (announcement) => announcement.id === announcementState.selectedAnnouncementId
  );

  let content = (
    <SelectedAnnouncement announcement={selectedAnnouncement} onDelete={handleDeleteAnnouncement} />
  );

  if (announcementState.selectedAnnouncementId === null) {
    content = (
      <NewAnnouncement onAdd={handleAddAnnouncement} onCancel={handleCancelAddAnnouncement} />
    );
  } else if (announcementState.selectedAnnouncementId === undefined) {
    content = <NoAnnouncementSelected onStartAddAnnouncement={handleStartAddAnnouncement} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <AnnouncementsSidebar
        onStartAddAnnouncement={handleStartAddAnnouncement}
        announcements={announcementState.announcements}
        onSelectAnnouncement={handleSelectAnnouncement}
      />
      {content}
    </main>
  );
}

export default App;
