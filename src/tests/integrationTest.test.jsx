import React from 'react';
import { render, fireEvent, waitFor, screen, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../store/index'; 
import AdvertismentContainer from '../containers/advertismentContainer';

describe('Integration Test: User Flow', () => {
  test('adds, edits, saves, and deletes advertisement', async () => {
    render(
      <Provider store={store}>
        <AdvertismentContainer />
      </Provider>
    );

    // Добавляем новое объявление
    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'New Title' } });
    fireEvent.change(screen.getByPlaceholderText('Content'), { target: { value: 'New Content' } });

    fireEvent.click(screen.getByText('Добавить'));

    // Проверяем, что новое объявление отображается
    await waitFor(() => {
      expect(screen.getByText('New Title')).toBeInTheDocument();
    });

    // Редактируем объявление
    fireEvent.click(screen.getByText('Редактировать'));
    fireEvent.change(screen.getByPlaceholderText('EditContent'), { target: { value: 'Edited Content' } });
    fireEvent.click(screen.getByText('Сохранить'));

    // Проверяем, что изменения сохранены
    await waitFor(() => {
      expect(screen.getByText('Edited Content')).toBeInTheDocument();
    });

    // Удаляем объявление
    fireEvent.click(screen.getByText('Удалить'));

    // Проверяем, что объявление успешно удалено
    await waitFor(() => {
      expect(screen.queryByText('Edited Content')).not.toBeInTheDocument();
    });
  });
});
