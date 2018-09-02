import React from 'react';

class PreferencesModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-3 d-inline col-3">
        <button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#preferencesModal">
          Select Filter Preferences
        </button>

        <div className="modal fade" id="preferencesModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Choose Your Preferences</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PreferencesModal;
