import * as React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    AsyncStorage
} from 'react-native'

import LottieView from 'lottie-react-native';
import { COLORS, FONTS, MARGIN } from '../constants/Constants'
const { width, height } = Dimensions.get('window');

export default class Splash extends React.Component {


    constructor(props) {
        super(props)

        this.ref = React.createRef(null)
        this.state = {

        }
    }
    componentDidMount() {
        this.get_Count()
     }
    async get_Count() {
        let coun = await AsyncStorage.getItem("login")
        // alert(coun)
        setTimeout(() => {
            if (coun == 1) {
                //   await AsyncStorage.setItem('login',null)
                //   this.setState({ count: 0 })
                this.props.navigation.navigate("HomeStack")

            } else {
                //   this.setState({ count: coun })
                this.props.navigation.navigate("Intro")

            }
        }, 2000)
    }

    render() {
        return (
            <>
                <View style={styles.main_view}>

                        <LottieView
                            ref={this.ref}
                            source={require("../lottie/lottie_ic_wok_s.json")}
                            loop={false}
                            autoPlay={true}
                            // speed={1.5}
                            // style={{ }}
                        />
                    


                    <Text style={styles.text}>
                        اطهي طعامك بنفسك
                    </Text>

                </View>



            </>
        )
    }

}


const styles = StyleSheet.create({
    main_view: {
        backgroundColor: COLORS.pramary,
        flex: 1,
        flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: "flex-start"
    }
    ,
    text: {
        fontSize: FONTS.h1,
        fontFamily: "Generator Black",
        color: COLORS.white,
        // alignSelf: "center",
        marginBottom: "60%"

    }

})