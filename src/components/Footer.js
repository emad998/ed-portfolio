import React from 'react'
import moment from 'moment'
import { Typography } from "@material-ui/core";

function Footer() {
    let timeStamp = new Date()
    


    return (
        <div style={{width: '100%', height: '50px'}}>
            <Typography variant="h5" component="h5" align="center">
            &#169; Copyright Ed Hanna {moment(timeStamp).format('YYYY')}
            </Typography>
        </div>
    )
}

export default Footer
