export default function ReturnsPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Returns & Exchange Policy</h1>
      
      <div className="prose prose-lg max-w-none space-y-6">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">📦 Returns</h2>
          <p className="text-gray-700 mb-4">
            We want you to be completely satisfied with your purchase. If you're not happy with your order,
            you can return it within <strong>14 days</strong> from the date of delivery.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Items must be in original condition and packaging</li>
            <li>Tags and labels must be attached</li>
            <li>Proof of purchase is required</li>
            <li>Return shipping costs are the responsibility of the customer</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">🔄 Exchanges</h2>
          <p className="text-gray-700 mb-4">
            Need a different size or color? We offer exchanges for eligible items within 14 days of delivery.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Exchanges are subject to item availability</li>
            <li>Original item must be in unused condition</li>
            <li>Price difference will be charged if exchanging for a more expensive item</li>
            <li>Refund will be issued if exchanging for a less expensive item</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">❌ Non-Returnable Items</h2>
          <p className="text-gray-700 mb-4">The following items cannot be returned or exchanged:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Items that have been used or damaged by the customer</li>
            <li>Personalized or custom-made products</li>
            <li>Items without original packaging</li>
            <li>Gift cards and vouchers</li>
            <li>Intimate items (for health and hygiene reasons)</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">💳 Refund Process</h2>
          <p className="text-gray-700 mb-4">
            Once we receive and inspect your returned item:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>We will notify you of the receipt</li>
            <li>Your refund will be processed within 5-7 business days</li>
            <li>Refunds will be issued to the original payment method</li>
            <li>Please allow 10-14 business days for the refund to appear in your account</li>
          </ol>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">📞 How to Return</h2>
          <p className="text-gray-700 mb-4">To initiate a return or exchange:</p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Contact us via WhatsApp at <strong>+972545088577</strong> or email at <strong>byahmadaalim@gmail.com</strong></li>
            <li>Provide your order number and reason for return</li>
            <li>We will provide you with a return authorization number</li>
            <li>Package the item securely and send it to the provided address</li>
            <li>Include the return authorization number in your package</li>
          </ol>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">🚚 Return Shipping</h2>
          <p className="text-gray-700 mb-4">
            Return shipping costs are the customer's responsibility unless the item was defective or we sent the wrong item.
            We recommend using a trackable shipping service and purchasing insurance for your return shipment.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">📧 Questions?</h2>
          <p className="text-gray-700">
            If you have any questions about our returns and exchange policy, please don't hesitate to contact us:
          </p>
          <ul className="list-none space-y-2 mt-4 text-gray-700">
            <li><strong>Email:</strong> byahmadaalim@gmail.com</li>
            <li><strong>WhatsApp:</strong> +972545088577</li>
            <li><strong>Response Time:</strong> Within 24 hours</li>
          </ul>
        </section>
      </div>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="text-blue-800">
          <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
}

