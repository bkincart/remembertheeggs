require 'faker'

10.times do
  Grocery.create(
    name: Faker::Food.ingredient,
    unit: Faker::Food.measurement
  )
end

Location.create(
  name: 'Trader Joe\'s',
  address: '1317 Beacon St',
  city: 'Brookline',
  state: 'MA',
  zip: '02446'
)

Location.create(
  name: 'Star Market',
  address: '33 Kilmarnock St',
  city: 'Boston',
  state: 'MA',
  zip: '02215'
)

Location.create(
  name: 'Home'
)
