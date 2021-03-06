import uuid from 'uuid/v1';
import car from '../src/utils/car';

jest.mock('uuid/v1');

const getCurrentCarSpy = jest.spyOn(
  car, 'getCurrentCar',
);
describe('addProdToCar', () => {
  beforeAll(() => {
    uuid.mockReturnValue('9999');
  });
  // test('check_execute_uuid', () => {
  //   car.addProdToCar('apple', 3);
  //   expect(uuid.mock.calls.length).toBe(1);
  // });

  // test('check_execute_uuid', () => {
  //   const newCar = car.addProdToCar('apple', 3);
  //   console.log(newCar);
  // });
  test('check_add_prod', () => {
    const newCar = car.addProdToCar('apple', 3);
    expect(newCar).toEqual(
      [{ id: '9999', name: 'apple', count: 3 }],
    );
  });

});