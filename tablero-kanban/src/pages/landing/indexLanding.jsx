import './styleLanding.css'
import React from "react"
import Column from "../../components/column/indexColumn"


function Landing() {
    return (
        <React.Fragment>
            <div className="landing_container">
                <Column/>
                <Column/>
                <Column/>
            </div>
        </React.Fragment>
    )

}

export default Landing;