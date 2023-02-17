import './index.css'

const PlanetItem = props => {
  const {planetsDetails} = props
  const {name, imageUrl, description} = planetsDetails

  return (
    <div className="planet-container" data-testid="planets">
      <img src={imageUrl} className="image" alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
