import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, cartesianGridm, Tooltip, Legend} from 'recharts';

class CodeChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: ["data", "open", "high", "low","close"],
            data:[],
          }
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.code !== this.props.code){
            console.log("codeChart componentDidupdate", this.props.code);
            let api_url =""
            let resultDataList = []
            fetch(api_url)
            .then(res => res.json())
            .then(data => {
                this.setState({data: data["result"]});
            })
        }
    }
    render() { 
        console.log("CodeChart render", this.state.data)
        return (
            <div>
                {this.state.data.length>0 ?
                    (
                        <lineChart width ={500} height={300} data= {this.state.data}
                            margin={ { top:5, right: 30, left: 20, bottom: 5,}}>
                                <XAxis dataKey= "date"/>
                                <YAxis/>
                                <legend/>
                                <Line type="monotone" dataKey="close" stroke="#8884d8" activeDot={ { r: 8}} />
                            </lineChart>
                    ):(null)    
            }
            </div>
        );
    }
}
 
export default CodeChart;
