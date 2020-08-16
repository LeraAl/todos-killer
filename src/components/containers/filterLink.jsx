import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import { setFilter } from "../../actions";

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.filter,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setFilter(ownProps.filter));
        },
    };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Nav.Link);

export default FilterLink;
