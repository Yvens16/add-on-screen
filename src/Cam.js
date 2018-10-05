import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import styled from "styled-components";
import { darken, lighten } from "polished";

const VideoBorder = styled.div`
	z-index: 10;
	position: absolute;
	top: 40px;
	left: 60px;
	width: 490px;
	margin: 0;
	padding: 0;
	height: 390px;
	border: 5px dashed #fff;
`;

const CaptureVideoBtn = styled.button`
	width: 100%;
	background-color: #139220;
	padding: 10px;
	margin: -1px 0 0 0;
	color: #fff;
	font-size: 24px;
	-webkit-font-smoothing: antialiased;
	display: block;
	outline: none;
	cursor: pointer;

	&:active {
		position: relative;
		top: 1px;
		background-color: ${darken(0.1, "#139220")};
	}
`;

const ImageCaptureContainer = styled.div`
	width: 640px;
	position: relative;
`;

const Video = styled.video`
	display: block;
	margin: 0;
	padding: 0;
`;

const Canvas = styled.canvas`
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	pointer-events: none;
`;

class ImageCapture extends Component {
	static propTypes = {
		onCapture: PropTypes.func.isRequired
	};
	constructor(props) {
		super(props);
		this.state = { videoSrc: "" };
	}
	componentDidMount() {
		navigator.getUserMedia =
			navigator.getUserMedia ||
			navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia ||
			navigator.msGetUserMedia ||
			navigator.oGetUserMedia;
		if (navigator.getUserMedia) {
			navigator.getUserMedia(
				{ video: true },
				this.handleVideo,
				this.videoError
			);
		}
	}
	handleVideo = stream => {
		this.setState({ videoSrc: window.URL.createObjectURL(stream) });
	};
	videoError = () => {};
	handleCapture = () => {
		this.canvas.getContext("2d").drawImage(this.video, 0, 0);
		this.props.onCapture(this.canvas.toDataURL("image/jpeg"));
	};
	render() {
		return (
			<ImageCaptureContainer>
				<Video
					width="640"
					height="480"
					autoPlay
					src={this.state.videoSrc}
					innerRef={video => {
						this.video = video;
					}}
				/>
				<VideoBorder />
				<CaptureVideoBtn onClick={this.handleCapture}>Capture</CaptureVideoBtn>
				<Canvas
					width="640"
					height="480"
					innerRef={canvas => {
						this.canvas = canvas;
					}}
				/>
			</ImageCaptureContainer>
		);
	}
}

class Cam extends Component {
	handleCapture = data => {
		console.log(data); // the jpeg data
	};
	render() {
		return (
			<div>
				<ImageCapture onCapture={this.handleCapture} />
			</div>
		);
	}
}

export default Cam;