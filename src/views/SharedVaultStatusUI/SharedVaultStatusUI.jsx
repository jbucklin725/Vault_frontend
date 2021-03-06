import React from 'react';
import {
    Input,
    Row,
    Col,
    Button
} from 'reactstrap';

const RowData = (data) => {

    const { signer } = data

    return (
        <span>
            <i className="mdi mdi-account"></i>
            <em className="tooltiptext">({signer.email}) <br />
            </em>
            <input className="check-sign-1" type="checkbox" value=""></input>
        </span>
    )
}

class SharedVaultStatusUI extends React.Component {
    render() {
        const props = this.props.props;
        return (<div class="shared summary vault-status">
            <div className="container">
                <div className="row d-flex justify-content-center">

                    <div className="col-md-5">
                        <div className="modal-text  aligncenter"><h3>Shared Vault Status</h3></div> <br />

                    </div>
                </div>
                <div className="row shared-form d-flex justify-content-center">
                    <div className="col-md-7">
                        <Row>
                            <Col md={3} className="light-font"><p>Vault Name : </p><br />
                                <p>Crypto Asset : </p><br />
                                <p>Vault address : </p><br />
                            </Col>
                            <Col md={9} className=""><Input type="text"
                                className="vault-type-select"
                                id="sharedVaultData_vaultName"
                                placeholder="My 1st vault"
                                value={props.sharedVaultDetails ? props.sharedVaultDetails.name : ''}
                            ></Input><br />
                                <Input className="vault-type-select"
                                    value={props.sharedVaultDetails ? props.sharedVaultDetails.currency : ''}
                                ></Input><br />
                                <Input type="text"
                                    id="sharedVaultData_vaultName"
                                    className="vault-type-select"
                                    placeholder="vault address"
                                    value={props.sharedVaultDetails ? props.sharedVaultDetails.address : ''}
                                ></Input>
                            </Col>
                        </Row>
                        <div className="signer">
                            <h3>Signers</h3>
                            <Row >
                                <Col className="d-flex justify-content-center">
                                    {
                                        props.sharedVaultDetails && props.sharedVaultDetails.signers.length > 0 ?
                                            props.sharedVaultDetails.signers.map((signer, idx) => {
                                                return (<RowData index={idx} {...this.props} signer={signer} />)
                                            }) :
                                            ''
                                    }
                                </Col>
                            </Row>
                            <div className="row">
                                <div className="art-icon">
                                    <div className="col-md-2 px-0">
                                        <i className="mdi mdi-alert mdi-information-variant"></i>
                                    </div>

                                    <div className="col-md-10 ">
                                        <div className="alerttext light-font">
                                            <p>Shared Vault Available!</p></div>
                                    </div>
                                </div>
                            </div>
                            <Row className="p-t-20 withdraw-light">
                                <Col className="d-flex justify-content-center">
                                    <Button className="btn pull-left btn-complete" onClick={props.onCancelWithdraw}>Close</Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        )
    }
}

export default SharedVaultStatusUI;