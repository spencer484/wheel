import React from 'react'



class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    this.props.amLoaded();
  }

  getCoords = (theta, radius) => {
    return {
      x: Math.cos(theta) * radius,
      y: Math.sin(theta) * radius
    }
  }
  render() {
    let newCords = this.getCoords(this.props.theta, this.props.radius)

    return (
      <img alt="ok" src={this.props.pic}
        style={{
          ...styles.card,
          left: `${this.props.center.x + newCords.x}px`,
          top: `${this.props.center.y - newCords.y}px`
        }}
      />
    )
  }

}

const styles = {
  card: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '200px',
    width: '200px',
    backgroundColor: 'blue',
    borderRadius: '50%'
  }
}

export default React.memo(Card);

