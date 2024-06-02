<template>
     <h3>History</h3>
          <ul id="list" class="list">
           <li 
              v-for="transaction in transactions" 
              v-bind:key="transaction.id" 
              :class="transaction.amount < 0 ? 'minus' : 'plus'">
            <p>{{ transaction.text }}</p> 
            <span >£{{ transaction.amount }}</span>
            <button class="delete-btn">x</button> 
          </li>
          </ul>
</template>


<script>
export default {
  setup() {
      const transactions = [
        {id: 1, text: 'Flowers', amount: -19.99},
        {id: 2, text: 'Salary', amount: 1300},
        {id: 3, text: 'Book', amount: -10},
        {id: 4, text: 'Camera', amount: -399},
      ]
  
      return {
        transactions
      }
  }
}
</script>
