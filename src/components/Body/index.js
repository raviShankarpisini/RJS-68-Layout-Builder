// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body">
          {showLeftNavbar && (
            <div className="left-nav-bar">
              <h1 className="nav-heading">Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="content">
              <h1 className="nav-heading">Content</h1>
              <p>
                Lorem ipsum dolar sit amet, constectetur adipiscing elit,sed do
                elusmod tempor incidunt ut labore et dolore magna aliqua.Ut enim
                ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="left-nav-bar">
              <h1 className="nav-heading">Right Navbar</h1>
              <div className="box">
                <p>Ad 1</p>
              </div>
              <div className="box">
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
