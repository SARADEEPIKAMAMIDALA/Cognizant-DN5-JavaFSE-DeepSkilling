import axios from "axios";
import GitClient from "./GitClient";

jest.mock("axios");

describe("Git Client Tests", () => {

    test("should return repository names for techiesyed", async () => {

        const repositories = [
            { id: 1, name: "React-App" },
            { id: 2, name: "SpringBoot-App" },
            { id: 3, name: "Java-Programs" }
        ];

        axios.get.mockResolvedValue({
            data: repositories
        });

        const result = await GitClient.getRepositories("techiesyed");

        expect(result).toEqual(repositories);
        expect(axios.get).toHaveBeenCalledWith(
            "https://api.github.com/users/techiesyed/repos"
        );
    });

});