import React from 'react'
import { Row,Col } from "antd"
import './index.less'
// import Util from '../../utils/utils'
import axios from '../../axios'
import { connect } from 'react-redux'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    // state={}
    UNSAFE_componentWillMount(){
        // this.setState({
        //     userName:'河畔一角'
        // })
        // setInterval(()=>{
        //     let sysTime = Util.formateDate(new Date().getTime());
        //     this.setState({
        //         sysTime
        //     })
        // },1000)
        // this.getWeatherAPIData();
    }
    componentDidMount(){
        this.props.TEXT()
        console.log('componentDidMount',this.props)
    }

    getWeatherAPIData(){
        let city = '北京';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
    render(){
        // console.log('render',this.props)
        const { menuName, menuType,text } = this.props;
        return (
            <div className="header">
                <Row className="header-top">
                    {
                        menuType?
                            <Col span={6} className="logo">
                                <img src="/assets/logo-ant.svg" alt=""/>
                                <span>IMooc 通用管理系统</span>
                            </Col>:''
                    }
                    <Col span={menuType?18:24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#/">退出</a>
                    </Col>
                </Row>
                {
                    menuType?'':
                        <Row className="breadcrumb">
                            <Col span={4} className="breadcrumb-title">
                                {menuName || '首页'}{text}
                            </Col>
                            <Col span={20} className="weather">
                                <span className="date">{this.state.sysTime}</span>
                                <span className="weather-img">
                                    <img src={this.state.dayPictureUrl} alt="" />
                                </span>
                                <span className="weather-detail">
                                    {this.state.weather}
                                </span>
                            </Col>
                        </Row>
                }
            </div>
        );
    }
}
const mapStateToProps = state => {
    // console.log(222,state)
    return {
        menuName: state.ebikeData.menuName,
        text:state.testRedux.text
    }
};
const mapDispatchToProps = (dispatch,state)=>{
    return {
        TEXT:()=>{
            dispatch({
                type:'TEST',
                payload:{
                    text:'abc'
                }
            });
        }
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)