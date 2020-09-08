import {add, remove} from './actions';
// import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";


test('add', () => {
  expect(add()).toEqual({type: 'ADD_TO_CART'})
});

test('remove', () => {
  expect(remove()).toEqual({type: 'REMOVE_FROM_CART'})
});
