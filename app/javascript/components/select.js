import $ from 'jquery'
import select2 from 'select2';
import 'select2/dist/css/select2.css';

const setupMultipleSelect = () => {
  $('.multiple-select').select2();
}

export { setupMultipleSelect };
