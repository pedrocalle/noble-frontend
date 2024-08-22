import countryApi from "@/api/countryApi";
import { useEffect, useState } from "react";

export function PaymentForm() {
  const [countries, setCountries] = useState<any>();
  const [errors, setErrors] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await countryApi.get("/all");
        setCountries(response.data);
      } catch (err) {
        setErrors(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form>
        <div className="bg-red-500 p-10 rounded-lg">
          <input className="w-full mb-3" placeholder="1234 1234 1234 1234" />
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="MM/YY" className="w-56" />
            <input placeholder="CVC" className="w-56" />
            <select className="w-56">
              <option selected>Selecione um país</option>
              {!loading && countries.length > 0 ? (
                countries.map((country: any) => (
                  <option key={country.cca2} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))
              ) : (
                <option>Carregando...</option>
              )}
            </select>
            <input className="w-56" placeholder="CEP" />
          </div>
        </div>
      </form>
    </div>
  );
}
