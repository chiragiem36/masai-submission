import React from "react";

const Header = props => (
    <div className="header">
        <div className="d-f justify-content-left subject">
            <span>MATHEMATICS</span>
        </div>
        <div className="d-f description">
            <div className="d-f-c actions mt-3">
                <span>Actions</span>
                <span className="mt-2">Move, Indent, Outdent, Delete</span>
            </div>
            <div className="d-f-c indent-levels mt-3">
                <span className="mt-2"></span>
            </div>
            <div className="d-f-c standard mt-3">
                <span>Standard</span>
                <span className="mt-2">A text of the standard</span>
            </div>
        </div>
    </div>
)

export default Header;