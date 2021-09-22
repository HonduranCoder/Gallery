import React from 'react';

export default class Dropdown extends React.Component {

    render() {
        return ( 
            <>
            {/*need a dropdown to create filter option, establish state on line 7.5, */} 
            <select value={this.props.select} onChange= {this.props.handleChange}>
              <option value ="">All</option>
             {
                 this.props.option.map(optionName => 
                    <option value={optionName}>
                        {optionName}
                    </option>
                    )
             }
              </select>
          </>
        );
      }
    }
    