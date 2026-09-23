export const accessories = [
  { id: 'glasses', name: 'Lunettes', price: 20, icon: 'Glasses' },
  { id: 'hat', name: 'Chapeau', price: 35, icon: 'Crown' },
  { id: 'bandana', name: 'Bandana', price: 25, icon: 'Shirt' },
  { id: 'crown', name: 'Couronne dorée', price: 60, icon: 'Sparkles' }
]

export function getAccessory(id) {
  return accessories.find((a) => a.id === id) || null
}
