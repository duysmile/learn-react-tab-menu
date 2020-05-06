import React from 'react';

class TabMenu extends React.Component {
  render() {
    const items = this.props.items.map(item => {
      return (
        <div className="tab-item">
          <div 
            className="icon"
            style={{'-webkit-mask': `url("${item.src}")`}}
          />
          <span>{item.title}</span>
        </div>
      );
    });
    return (
      <nav className="tab-menu">
        {items}
      </nav>
    );    
  }
}

export default TabMenu;
