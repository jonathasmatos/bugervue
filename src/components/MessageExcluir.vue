<template>
    <div class="message-container">
      <p>{{  msgExcluir }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "MessageExcluir",
    props: {
      msgExcluir: String,
    },
  };
  </script>
  
  <style scoped>
  .message-container{
      color: #eaebec;
      background-color: #eb0606;
      border: 2px solid #3d5064;
      border-radius: 5px;
      padding: 10px;
      max-width: 400px;
      margin: 30px auto;
      text-align: center;
  }
  </style>