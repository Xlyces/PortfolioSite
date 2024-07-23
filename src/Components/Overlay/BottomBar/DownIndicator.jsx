import React from 'react'

function DownIndicator() {
  return (
    <div>
        <div class='arrowScroll' style={{
            position:'relative',
            height: '4em',
            color: 'yellow'
        
        }}

        ></div>
            <div class='arrow' style={{
                border: 'solid #ebffod',
                borderWidth: '0 5px 5px 0',
                color: 'yellow',
                display: 'inline-block',
                padding: '12px',
                position: 'absolute',
                top: '0',
                left: '50%', 
                transform:' translateX -50%) rotate(45deg)'
            }}></div>
            <div class='arrow'></div>
            <div class='arrow'></div>
    </div>
  )
}

export default DownIndicator