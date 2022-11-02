import React from 'react'
import './WidgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className="witgetSmList">
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='' className='widgetSmImg'></img>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Kaller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>

          <button className="widgetSmButton">
            <VisibilityIcon className='widgetSmIcon'/>
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='' className='widgetSmImg'></img>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Kaller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>

          <button className="widgetSmButton">
            <VisibilityIcon className='widgetSmIcon' />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='' className='widgetSmImg'></img>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Kaller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>

          <button className="widgetSmButton">
            <VisibilityIcon className='widgetSmIcon'/>
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='' className='widgetSmImg'></img>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Kaller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>

          <button className="widgetSmButton">
            <VisibilityIcon className='widgetSmIcon'/>
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='' className='widgetSmImg'></img>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Kaller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>

          <button className="widgetSmButton">
            <VisibilityIcon className='widgetSmIcon'/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm