import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import AuthModal from "./auth_modal";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: "login",
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthModal);