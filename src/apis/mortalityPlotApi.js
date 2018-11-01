import { Component } from 'react';
import axios from 'axios';

class mortalityPlotApi extends Component {

    async getMortalityPlot(params) {
        const response_dot = await axios.get('http://localhost:8080/fpm/userDot', {
            params,
        });

        const response_scatter = await axios.get('http://localhost:8080/fpm/scatter', {
            params,
        });

        const response_benchmark = await axios.get('http://localhost:8080/fpm/benchmark', {
            params,
        });

        const response_up = await axios.get('http://localhost:8080/fpm/up', {
            params,
        });

        const response_up2 = await axios.get('http://localhost:8080/fpm/up2', {
            params,
        });

        const response_lo = await axios.get('http://localhost:8080/fpm/lo', {
            params,
        });

        const response_lo2 = await axios.get('http://localhost:8080/fpm/lo2', {
            params,
        });

        const response_missing = await axios.get('http://localhost:8080/fpm/missing', {
            params,
        });

        const result = {
            dot: response_dot.data,
            scatter: response_scatter.data,
            benchmark: response_benchmark.data,
            up: response_up.data,
            up2: response_up2.data,
            lo: response_lo.data,
            lo2: response_lo2.data,
            missing: response_missing.data,
            loading: false
        }
        return result;
    }

    async getMortalityPlotForDrOnly(params) {

        const response_dot = await axios.get('http://localhost:8080/fpm/userDot', {
            params,
        });

        const response_benchmark = await axios.get('http://localhost:8080/fpm/benchmark', {
            params,
        });

        const response_up = await axios.get('http://localhost:8080/fpm/up', {
            params,
        });

        const response_up2 = await axios.get('http://localhost:8080/fpm/up2', {
            params,
        });

        const response_lo = await axios.get('http://localhost:8080/fpm/lo', {
            params,
        });

        const response_lo2 = await axios.get('http://localhost:8080/fpm/lo2', {
            params,
        });

        const response_missing = await axios.get('http://localhost:8080/fpm/missing', {
            params,
        });

        const result = {
            dot: response_dot.data,
            scatter: [],
            benchmark: response_benchmark.data,
            up: response_up.data,
            up2: response_up2.data,
            lo: response_lo.data,
            lo2: response_lo2.data,
            missing: response_missing.data,
            loading: false
        }
        return result;
    }




    async getBenchmark(params) {
        const response = await axios.get('http://localhost:8080/fpm/benchmark', {
            params,
        });
        const  result = {
            data: response.data
        }
        return result;
    }

    async getUp(params) {
        const response = await axios.get('http://localhost:8080/fpm/up', {
            params,
        });
        const  result = {
            data: response.data
        }
        return result;
    }

    async getUp2(params) {
        const response = await axios.get('http://localhost:8080/fpm/up2', {
            params,
        });
        const  result = {
            data: response.data
        }
        return result;
    }

    async getLo(params) {
        const response = await axios.get('http://localhost:8080/fpm/lo', {
            params,
        });
        const  result = {
            data: response.data
        }
        return result;
    }

    async getLo2(params) {
        const response = await axios.get('http://localhost:8080/fpm/lo2', {
            params,
        });
        const  result = {
            data: response.data
        }
        return result;
    }

    async getMissing(params) {
        const response = await axios.get('http://localhost:8080/fpm/missing', {
            params,
        });
        const  result = {
            data: response.data
        }
        return result;
    }

}
export default mortalityPlotApi;