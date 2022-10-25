// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickContent = () => onToggleShowContent()
      const onClickLeftNavBar = () => onToggleShowLeftNavbar()
      const onClickRightNavBar = () => onToggleShowRightNavbar()

      return (
        <div className="configuration-container">
          <h1>Layout</h1>
          <ul>
            <li>
              <input
                type="checkbox"
                id="leftNavBar"
                onClick={onClickLeftNavBar}
              />
              <label htmlFor="leftNavBar">Left Navbar</label>
            </li>
            <li>
              <input type="checkbox" id="context" onClick={onClickContent} />
              <label htmlFor="context">Content</label>
            </li>

            <li>
              <input
                type="checkbox"
                id="rightNavBar"
                onClick={onClickRightNavBar}
              />
              <label htmlFor="rightNavBar">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
