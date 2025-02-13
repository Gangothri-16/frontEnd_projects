import React from 'react'
import './Style.css'
export default function Home() {
  return (
    <div className='home'>
      <form className='taskform'>
        <input type="text" placeholder='Enter a task...' className='task-input'/>
        <button className='add-task-button'>ADD TASK</button>
      </form>
      <div className='task-sections'>
        <div className='task-section'>
          <h2>To-Do-Tasks</h2>
      </div>
      <div className='task-section'>
        <h2>Ongoing Tasks</h2>
      </div>
      <div className='task-section'>
        <h2>Completed Tasks</h2>
      </div>
    </div>
   </div>
  );
}
