import React from 'react';

class Item extends React.Component{
    constructor(props){
        super(props)
        this.state={
            clicks:0,
            remain:10
        }
    }

    clickme(){
        this.setState({
            clicks:this.state.clicks+1,
            remain:this.state.remain-1
        });
    }
    render(){
        return(
            <div>
                <h1 onClick={()=>{this.clickme()}} >new page {this.props.name}</h1>
                <span>{this.state.clicks}  {this.state.remain}</span>
            </div>
        );
    }
}
export default Item;