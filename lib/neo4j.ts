//@ts-ignore
import neo4j, { Node, Relationship } from 'neo4j-driver'

const { NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD } = process.env

export const driver = neo4j.driver(
    NEO4J_URI as string,
    neo4j.auth.basic(
        NEO4J_USER as string,
        NEO4J_PASSWORD as string
    )
)


export async function read(cypher:any, params = {}) {
    // 1. Open a session
    const session = driver.session()

    try {
        // 2. Execute a Cypher Statement
        const res = await session.executeRead((tx:any) => tx.run(cypher, params))

        // 3. Process the Results
        const values = res.records.map((record:any) => record.toObject())

        return values
    }
    finally {
        // 4. Close the session 
        await session.close()
    }
}

export async function write(cypher:any, params = {}) {
    // 1. Open a session
    const session = driver.session()
  
    try {
      // 2. Execute a Cypher Statement
      const res = await session.executeWrite((tx:any) => tx.run(cypher, params))
  
      // 3. Process the Results
      const values = res.records.map((record:any) => record.toObject())
  
      return values
    }
    finally {
      // 4. Close the session 
      await session.close()
    }
  }