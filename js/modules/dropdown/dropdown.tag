<dropdown>

  <style>
  dropdown .title {
    color: #036;
    margin-bottom: 5px;
    font-weight: bold;
  }
  </style>

  <div class="title">Please select an option:</div>

  <select>
    <option each="{option in options}" value="{option.value}">{option.label}</option>
  </select>

  neo.inject.call(this, neo.DropDown);

</dropdown>