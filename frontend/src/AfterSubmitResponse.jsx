import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
export default function AfterSubmitResponse(props){
    return(
      <div className="response">
          <div className="overlay"></div>
          <div className="after-resp center-ele">
            {props.msg}
              <div>
                <CheckCircleOutlineIcon id="submitted-icon"/>
                </div>
          </div>
          </div>
    )
  }