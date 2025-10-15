
export default function PrivacyPolicy() {
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <div style={{ color: 'white' }} className="max-w-3xl mx-auto px-4 py-10 text-gray-800 font-sans">
                <h2 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h2>
                <br></br>

                <section className="my-8" style={{paddingLeft:'5%', paddingRight:'5%'}}>
                    <h4 className="mb-2">1. What We Collect</h4>
                    <p>We do not collect any personal data from users. No forms, no cookies, no tracking.</p>
                </section>

                <section className="my-8" style={{paddingLeft:'5%', paddingRight:'5%'}}>
                    <h4 className="text-xl font-semibold mb-2">2. Third Parties</h4>
                    <p>We do not share any data because we don't collect any.</p>
                </section>

                <section className="my-8" style={{paddingLeft:'5%', paddingRight:'5%'}}>
                    <h4 className="text-xl font-semibold mb-2">3. Updates</h4>
                    <p>If we ever change this policy, this page will be updated.</p>
                </section>

                <p className="text-sm text-gray-500 mt-10 text-center">Last updated: July 2, 2025</p>
            </div>
        </>
    );
}
