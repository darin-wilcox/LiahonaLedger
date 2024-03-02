import { useRef } from 'react';

import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewAnnouncement({ onAdd, onCancel }) {
  const modal = useRef();

  const pulpitDesc = useRef();
  const programDesc = useRef();
  const includeInProgram = useRef();
  const includeInPulpit = useRef();
  const dateStartAnnounce = useRef();
  const dateStopAnnounce = useRef();
  const announceTitle = useRef();

  function handleSave() {
    const enteredPulpitDesc = pulpitDesc.current.value;
    const enteredProgramDesc = programDesc.current.value;
    const enteredDateCreated = new Date();
    const enteredDateStartAnnounce = dateStartAnnounce.current.value;
    const enteredDateStopAnnounce = dateStopAnnounce.current.value;
    const enteredIncludePulpit = includeInPulpit.current.checked;
    const enteredIncludeProgram = includeInProgram.current.checked;
    const enteredAnnounceTitle = announceTitle.current.value;

    if (enteredAnnounceTitle.trim() === '' 
      || enteredIncludeProgram && enteredProgramDesc.trim() === ''
      || enteredIncludePulpit && enteredPulpitDesc.trim() === ''
      || enteredDateStartAnnounce === ''
      || enteredDateStopAnnounce === '')
    {
      modal.current.open();
      return;
    }

    onAdd({
      pulpitDesc: enteredPulpitDesc,
      programDesc: enteredProgramDesc,
      dateCreated: enteredDateCreated,
      dateStartAnnounce: enteredDateStartAnnounce,
      dateStopAnnounce: enteredDateStopAnnounce,
      includeInPulpit: enteredIncludePulpit,
      includeInProgram: enteredIncludeProgram,
      announceTitle: enteredAnnounceTitle,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={announceTitle} label="Brief Title" />
          <Input type="date" ref={dateStartAnnounce} label="Date to Start Announcing" />
          <Input type="date" ref={dateStopAnnounce} label="Date to Stop Announcing" />
          <div>
            <label><input ref={includeInPulpit} type="checkbox" /> Include in Pulpit</label>
          </div>
          <Input textarea ref={pulpitDesc} label="Pulpit Description" />
          <div>
            <label><input ref={includeInProgram} type="checkbox" /> Include in Program</label>
          </div>
          <Input textarea ref={programDesc} label="Program Description" />
          
        </div>
      </div>
    </>
  );
}
