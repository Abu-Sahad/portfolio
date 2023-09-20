import { useQuery } from "@tanstack/react-query"

const useProjects = () =>{
    const {data:projects , isLoading, error,  isError } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch("projects.json")
          .then(res=>res.json())
        
      })
      return [projects , isLoading ,isError,error ]
}

export default useProjects;