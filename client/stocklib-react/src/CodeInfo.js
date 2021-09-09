import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import {widthStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/styles';
import CodeSearch from './CodeSearch'
import Codeprice from './CodePrice'
import CodeChart from './CodeChart'


const style = {
    root: {
        flexGrow: 1,
        paper: {
            height: 140,
            width: 100,
        },
        control: {
            padding: 2,
        },
    }
};

class CodeInfo extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    componentDidUpdate(prevProps,prevState,snapshot){

    }
    handleSelectCode = (selectedCode)=> {
        console.log("CodeInfo handleSelectedCode", selectedCode);
        this.setState({selectedCode});
    }
    render(){
        return(
            <div>
                <div>
                    <codespan/>
                </div>
                <div>
                    <Grid>
                        <Grid container justify="left">
                            <Grid key={"codePrice"}item>
                                <Paper className={classes.paper}/>
                            </Grid>
                            <Grid key ={"codeChart"} item>
                                <Paper className = {classes.paper}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(sytles)(codeInfo);