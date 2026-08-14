---
sidebar_position: 2
title: Accept a payment
---

# Accept a payment

Create a payment intent, collect a payment method, then confirm the payment.

```js
const payment = await acme.payments.create({
  amount: 2400,
  currency: 'GBP',
})
```

The widget gives readers the raw version of this page without navigation, styling, or other page chrome.
