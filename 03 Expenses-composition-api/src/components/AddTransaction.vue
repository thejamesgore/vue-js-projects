<template>
    <h3>Add new transaction</h3>
          <form id="form" @submit.prevent="onSubmit">
            <div class="form-control">
              <label for="text">Description</label>
              <input type="text" id="text" placeholder="Enter text..." />
            </div>
            <div class="form-control">
              <label for="amount"
                >Amount <br />
                (negative - expense, positive - income)</label
              >
              <input type="number" id="amount" placeholder="Enter amount..." />
            </div>
            <button class="btn">Add transaction</button>
          </form>
</template>

<script setup>
  const onSubmit = () => {
    console.log(`form submitted`)
  }
</script>