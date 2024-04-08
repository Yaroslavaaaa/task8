// Тесты для компонентов

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../store/index'; // Предполагается, что store экспортируется из файла store.js
import AddAdvertisementForm from './addAdvertisementForm';

test('renders AddAdvertisementForm correctly', () => {
  render(
    <Provider store={store}>
      <AddAdvertisementForm />
    </Provider>
  );
  expect(screen.getByText('Добавить объявление')).toBeInTheDocument();
});


