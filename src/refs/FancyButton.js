import React from "react";
import withLogProps from "./withLogProps";

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));
FancyButton.displayName = 'FancyButton';

const WithLogPropsFancyButton = withLogProps(FancyButton);

class FragmentFancyButton extends React.Component {
    constructor(props) {
        super(props);
        this.refFancyButton = React.createRef();
        this.refHOCFancyButton = React.createRef();
    }

    componentDidMount() {
        console.log('refFancyButton DOM', this.refFancyButton.current);
        console.log('refHOCFancyButton DOM', this.refHOCFancyButton.current);
    }

    render() {
        return (
            // Vous pouvez maintenant obtenir une ref directement attachée au bouton DOM :
            <React.Fragment>
                <FancyButton ref={this.refFancyButton}>Fancy Button</FancyButton>&nbsp;
                <WithLogPropsFancyButton testProp={1} ref={this.refHOCFancyButton}>HOC Fancy Button</WithLogPropsFancyButton>
            </React.Fragment>
        )
    };
}

export default FragmentFancyButton;
